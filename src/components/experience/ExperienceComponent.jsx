import LayoutComponent from "../LayoutComponent";
import ExperienceLayout from "./ExperienceLayout";

const ExperienceComponent = () => {
  return (
    <LayoutComponent
      topic={"Experience"}
      idcomponent={"experience"}
      bgopacity={"bg-opacity-[90%]"}
    >
      <ExperienceLayout
        topic1={"W&J Engineering"}
        topic2={"IT Project Coordinator"}
        durationtime={"November 2023 - November 2024"}
        addresslearn={"Bangkok , Thailand"}
      >
        <p>
          - Attend meetings and conduct testing with the local Thai team; assist
          testers when they need to communicate with the development team and
          the Project Manager, including translating between Thai and English as
          needed
        </p>
        <p>
          - Monitor and follow up on the work scope and Jira tasks to ensure the
          project remains on track and aligns with planned objectives
        </p>
        <p>
          - Assign tickets to testing team and collaborate with them during the
          testing process
        </p>
        <p>
          - Gather and document requirements, ensuring effective communication
          with the Project Manager and development team
        </p>
        <p>
          Prepare and distribute detailed meeting minutes for the Project
          Manager
        </p>
        <p>
          Conduct End-to-End (E2E) testing and User Acceptance Testing (UAT){" "}
        </p>
        <p>Provide training and implement related processes</p>
        <p>
          Prepare and deliver project progress reports, official correspondence,
          and other related project documentation{" "}
        </p>
        <p>Provide regular updates and progress reports to stakeholders</p>
      </ExperienceLayout>

      <ExperienceLayout
        topic1={"Digital Economy Promotion Agency"}
        topic2={"Customer Relations Officer"}
        durationtime={"October 2020 - November 2021"}
        addresslearn={"Bangkok , Thailand"}
      ></ExperienceLayout>

      <ExperienceLayout
        topic1={"AuPair SA"}
        topic2={"Aupair/Nanny"}
        durationtime={"2019 - 2020"}
        addresslearn={"South Africa"}
      ></ExperienceLayout>

      <ExperienceLayout
        topic1={"NEC Corporation (Thailand)"}
        topic2={"Executive Secretary"}
        durationtime={"2016 - 2018"}
        addresslearn={"Bangkok , Thailand"}
      ></ExperienceLayout>

      <ExperienceLayout
        topic1={"NEC Corporation (Thailand) Ltd."}
        topic2={"Receptionist & Operator"}
        durationtime={"2014 - 2016"}
        addresslearn={"Bangkok , Thailand"}
      ></ExperienceLayout>
    </LayoutComponent>
  );
};

export default ExperienceComponent;
