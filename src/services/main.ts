import ProfileService from '@/services/profile'
import SpecialtyService from '@/services/specialty'
import SkillService from '@/services/skill'
import OutputService from '@/services/output'
import ContactService from '@/services/contact'

export default class MainService {
  profile: ProfileService
  specialty: SpecialtyService
  skill: SkillService
  output: OutputService
  contact: ContactService

  constructor() {
    this.profile = new ProfileService(this)
    this.specialty = new SpecialtyService(this)
    this.skill = new SkillService(this)
    this.output = new OutputService(this)
    this.contact = new ContactService(this)
  }

  async readAll() {
    this.profile.readData();
    this.specialty.readData();
    this.skill.readData();
    this.output.readData();
    this.contact.readData();
  }
  
  
}
