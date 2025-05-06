import SectionBlock from "./SectionBlock";
import SocialLinks from "./SocialLinks";
import RegisterForm from "./RegisterForm";

export default function EventDetails() {   

return (
    <div className="max-w-2xl mx-auto space-y-6 p-4">
        <h2 className="text-5xl font-bold">
            Microsoft SDE Secrets: Tips by Anshima Choudhary for Landing Top
            Placements
        </h2>
        <p className="text-sm text-gray-500">
            Sunday, October 22, 2023 · 12PM - 1PM · YouTube
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

        <SectionBlock
            title="Session Highlights"
            list={[
                "Gain Insider Tips from a Microsoft SDE",
                "Placement Interview Mastery",
                "Career Insights from an industry expert",
            ]}
        />

        <SectionBlock
            title="About Anshima Choudhary"
            body="Anshima is a Senior SDE at Microsoft, 2018 Harvard Model UN winner, and former MakeMyTrip engineer. She graduated from NSIT in 2020."
        />

        <SectionBlock
            title="Event Details"
            body="Date: October 22, 2023 · Time: 12PM - 1PM"
        />

        <SectionBlock
            title="Who Should Attend"
            list={[
                "Students aspiring for a career in software development",
                "Tech enthusiasts seeking insider tips",
                "Anyone looking to improve career-building skills",
            ]}
        />

        <SectionBlock
            title="About SoarX"
            body="SoarX Network is a dynamic community of 2500+ students passionate about innovation and tech careers."
        />

        <SocialLinks />
    </div>
);
}
