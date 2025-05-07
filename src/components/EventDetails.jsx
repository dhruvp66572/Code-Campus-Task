import SectionBlock from "./SectionBlock";
import SocialLinks from "./SocialLinks";
import RegisterForm from "./RegisterForm";

export default function EventDetails() {
  return (
    <>
      <div className="max-w-2xl mx-auto space-y-6 p-4">
        <h2 className="text-5xl font-bold">
          Microsoft SDE Secrets: Tips by Anshima Choudhary for Landing Top
          Placements
        </h2>
        <p className="text-sm text-gray-500 flex items-center space-x-4 ">         
          Sunday, October 22, 2023 · 12PM - 1PM           
        </p>

        <RegisterForm
          buttonText="Register"
          modalTitle="Event Registration"
          className="inline-block"
          onSubmitSuccess={(data) => {
            console.log("Registration successful:", data);
            alert("Thank you for registering!");
          }}
        />
        <p>
          🚀 Microsoft SDE Secrets: Tips by Anshima Choudhary for Landing Top
          Placements 🚀
        </p>
        <p>
          Join us for an exclusive session with Anshima Choudhary, a seasoned
          Senior Software Development Engineer at Microsoft. Are you a student
          aspiring to excel in placement interviews and secure top positions?
          This is an opportunity you can't afford to miss!
        </p>
        <p>
          🔍 <strong>Session Highlights:</strong> <br />- Gain Insider Tips:
          Discover the insider knowledge and strategies that have propelled
          Anshima to success in her career at Microsoft. <br />
          - Placement Interview Mastery: Learn how to approach and excel in
          placement interviews, and get a step ahead in the competitive tech
          industry. <br />- Career Insights: Get invaluable insights on building
          a successful career in software development, directly from a Microsoft
          expert.
        </p>
        <p>
          👩‍💼 <strong>About Anshima Choudhary:</strong> <br />
          Anshima is a highly accomplished Senior Software Development Engineer
          at Microsoft. She is a 2018 Harvard Model United Nations Winner and
          has also contributed her expertise at MakeMyTrip. An alumni of NSIT,
          she graduated with a degree in Computer Science and Engineering in
          2020.
        </p>
        <p>
          📅 <strong>Event Details:</strong> <br />
          Date: October 22, 2023 <br />
          Time: 12:00pm - 01:00pm
        </p>
        <p>
          📚 <strong>Who Should Attend:</strong> <br />
          - Students aspiring for a career in software development <br />- Tech
          enthusiasts seeking insider tips from a Microsoft expert <br />-
          Anyone looking to enhance their interview and career-building skills
        </p>
        <p>
          👥 <strong>About SoarX Network:</strong> SoarX Network is a dynamic
          community of 2500+ college students passionate about technology,
          innovation, and career development.
        </p>
        <p>
          🌟 Don't miss out on this incredible opportunity to learn from one of
          the best in the industry. Secure your spot now and take the first step
          towards your dream career! 🌟
        </p>
        <p>
          🌐 <strong>Connect with Us:</strong> <br />- WhatsApp Group:{" "}
          <a
            href="https://chat.whatsapp.com/CFeDvPQmH5v2Hg4tzHjr8g"
            target="_blank"
            rel="nofollow noopener"
          >
            https://chat.whatsapp.com/CFeDvPQmH5v2Hg4tzHjr8g
          </a>{" "}
          <br />- Twitter:{" "}
          <a
            href="https://twitter.com/SoarXNetwork"
            target="_blank"
            rel="nofollow noopener"
          >
            https://twitter.com/SoarXNetwork
          </a>{" "}
          <br />- Instagram:{" "}
          <a
            href="https://www.instagram.com/soarxnetwork/"
            target="_blank"
            rel="nofollow noopener"
          >
            https://www.instagram.com/soarxnetwork/
          </a>{" "}
          <br />- LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/company/soarxnetwork/"
            target="_blank"
            rel="nofollow noopener"
          >
            https://www.linkedin.com/company/soarxnetwork/
          </a>
        </p>
        <p>
          <a
            href="https://www.youtube.com/hashtag/microsoft"
            target="_blank"
            rel="nofollow noopener"
          >
            #Microsoft
          </a>{" "}
          <a
            href="https://www.youtube.com/hashtag/techcareer"
            target="_blank"
            rel="nofollow noopener"
          >
            #TechCareer
          </a>{" "}
          <a
            href="https://www.youtube.com/hashtag/placementsuccess"
            target="_blank"
            rel="nofollow noopener"
          >
            #PlacementSuccess
          </a>{" "}
          <a
            href="https://www.youtube.com/hashtag/anshimachoudhary"
            target="_blank"
            rel="nofollow noopener"
          >
            #AnshimaChoudhary
          </a>{" "}
          <a
            href="https://www.youtube.com/hashtag/soarxnetwork"
            target="_blank"
            rel="nofollow noopener"
          >
            #SoarXNetwork
          </a>{" "}
          <a
            href="https://www.youtube.com/hashtag/softwaredevelopment"
            target="_blank"
            rel="nofollow noopener"
          >
            #SoftwareDevelopment
          </a>
        </p>
      </div>
    </>
  );
}
