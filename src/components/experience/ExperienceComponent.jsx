import LayoutComponent from "../LayoutComponent"
import ExperienceLayout from "./ExperienceLayout"


const ExperienceComponent = () => {
  return (
    <LayoutComponent topic={'Experience'} idcomponent={'experience'} bgopacity={'bg-opacity-[90%]'}>
      
      <ExperienceLayout topic1={'Krissana Engineering & Supply'} topic2={'Administrate Officer'} durationtime={'December 2021 - March 2023'} addresslearn={'Bangkok , Thailand'}>
        <p>- Monitoring payments and preparing invoices and purchase orders</p>
        <p>- Conducts meetings as required to resolve questions or to discuss changes proposed by the Owner or Contractor</p>
        <p>- Provide technical assistance and answer inquiries for professional staff, contractors and the general public</p>  
        <p>- Prepare and maintain reports, forms, spreadsheets, databases and related correspondence to ensure compliance with contract documents and specifications</p>      
      </ExperienceLayout>
      
      <ExperienceLayout topic1={'Digital Economy Promotion Agency'} topic2={'Customer Relations Officer'} durationtime={'October 2020 - November 2021'} addresslearn={'Bangkok , Thailand'}>
        <p>- Offering assistance to customers to ensure they find the right product/service</p>
        <p>- Communicating with customers by email, phone, and face-to-face</p>
        <p>- Refer customers to senior staff when necessary</p> 
        <p>- Learning about company's products/services and remaining up to date with any changes</p>    
        <p>- Investigating and solving customer problems</p>
        <p>- Meeting with management to discuss possible improvements to the company's customer service</p>  
      </ExperienceLayout>

      <ExperienceLayout topic1={'Lucky Global Corporation (Thailand)'} topic2={'Executive Secretary'} durationtime={'2016 - 2017'} addresslearn={'Bangkok , Thailand'}>
        <p>- Managing daily administrative functions conferences etc.</p>
        <p>- Attend meetings and keep minutes</p>
        <p>- Receive and screen phone calls and redirect them when appropriate</p> 
        <p>- Handle and prioritize all outgoing or incoming correspondence (e-mail, letters, packages etc.)</p>  
        <p>- Make travel arrangements for executives</p>    
        <p>- Handle confidential documents ensuring they remain secure</p> 
      </ExperienceLayout>

      <ExperienceLayout topic1={'NEC Corporation (Thailand)'} topic2={'Cooperative Education'} durationtime={'2015 - 2016'} addresslearn={'Bangkok , Thailand'}>
        <p>- Welcomes visitors by greeting them, in person or on the telephone and answering or referring inquiries</p>
        <p>- Directs visitors by maintaining employee and department directories</p>
        <p>- Maintains safe and clean reception area by complying with procedures, rules, and regulations maintains continuity among work teams by documenting and communicating actions, irregularities, and continuing needs</p>        
        <p>- Contributes to team effort by accomplishing related results as needed</p>
      </ExperienceLayout>


      <ExperienceLayout topic1={'Sawasdee Hotel Banglumpoo Inn 2'} topic2={'Receptionist'} durationtime={'2014 - 2015'} addresslearn={'Bangkok , Thailand'}>
        <p>- Welcome and Check in- out Guests</p>
        <p>- Handle Guest Inquiries and Complaints</p>
        <p>- Answer Phones</p>    
        <p>- Process Payments</p>    
      </ExperienceLayout>

    </LayoutComponent>
  )
}

export default ExperienceComponent