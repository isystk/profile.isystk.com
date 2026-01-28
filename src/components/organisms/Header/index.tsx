import React from 'react';
import styles from './styles.module.scss';
import Logo from '@/components/atoms/Logo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Url } from '@/constants/url';
import Image from '@/components/atoms/Image';
import DropDown from '@/components/atoms/DropDown';
import SideMenu from '@/components/organisms/SideMenu';
import useAppRoot from '@/states/useAppRoot';
import CSRFToken from '@/components/atoms/CSRFToken';
import cartImage from '@/assets/images/cart.png';

const Header = () => {
  const { state, service } = useAppRoot();
  const router = useRouter();

  if (!state || !service) return <></>;
  const { isLogined, name } = state.auth;

  return (
    <header className={`${styles.header} shadow-sm`}>
      <nav className="flex flex-wrap items-center justify-between bg-white px-4 py-3">
        <Logo />
        {/* メニュー（PC表示） */}
        <div className={`${styles.menuContainer} hidden md:flex`}>
          <ul>
            {(() => {
              if (isLogined) {
                return (
                  <li>
                    <DropDown
                      text={`${name} 様`}
                      items={[
                        {
                          text: 'ログアウト',
                          onClick: async () => {
                            await service.auth.logout();
                            router.push(Url.LOGIN);
                          },
                        },
                        {
                          text: 'カートを見る',
                          onClick: () => router.push(Url.MYCART),
                        },
                      ]}
                    />
                  </li>
                );
              } else {
                return (
                  <>
                    <li>
                      <Link className="btn btn-danger" href={Url.LOGIN}>
                        ログイン
                      </Link>
                    </li>
                    <li>
                      <Link href={Url.REGISTER}>新規登録</Link>
                    </li>
                  </>
                );
              }
            })()}
            <li>
              <Link href={Url.MYCART}>
                <Image src={cartImage.src} width={30} height={30} alt="カート" />
              </Link>
            </li>
            <li>
              <Link href={Url.CONTACT}>お問い合わせ</Link>
            </li>
          </ul>
        </div>
        {/* サイドメニュー */}
        <SideMenu
          text={isLogined ? `${name} 様` : ''}
          items={(() => {
            const items: Array<{ text: string; onClick?: () => void }> = [];
            if (isLogined) {
              items.push({
                text: 'ログアウト',
                onClick: () => {
                  const element: HTMLFormElement = document.getElementById(
                    'logout-form',
                  ) as HTMLFormElement;
                  if (element) {
                    element.submit();
                  }
                },
              });
            } else {
              items.push(
                {
                  text: 'ログイン',
                  onClick: () => router.push(Url.LOGIN),
                },
                {
                  text: '新規登録',
                  onClick: () => router.push(Url.REGISTER),
                },
              );
            }
            items.push(
              {
                text: 'カートを見る',
                onClick: () => router.push(Url.MYCART),
              },
              {
                text: 'お問い合わせ',
                onClick: () => router.push(Url.CONTACT),
              },
            );
            return items;
          })()}
        />
      </nav>
      <form id="logout-form" action={Url.LOGOUT} method="POST">
        <CSRFToken />
      </form>
    </header>
  );
};

export default Header;
