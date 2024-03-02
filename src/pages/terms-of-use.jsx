import Page from '@/ui/page';
import H1 from 'ui/heading/h1';
// import H2 from 'ui/heading/h2';
import H3 from 'ui/heading/h3';
import P from 'ui/heading/p';

export default function Index() {
    return (
        <Page
            title="Terms of Use - Atlas"
            description="This is our terms of use and privacy policy for using Atlas."
            contribute={false}
        >
            <section className='container mx-auto px-5'>
                <div className='mx-16'>
                    <H1> Terms of Use and Privacy Policy </H1>
                    <br />
                    <P className="text-xl mb-2"> This terms of use and privacy policy will help you understand how the student researchers will use and
                        protect the data you provide to us when you visit and use Atlas. </P>
                    <br />
                    <H3 className="mb-2"> Overview</H3>
                    <P> Greetings! We are Nicolas Sy, Rafael Topacio, Lynux Ansay and Henric Tay. We are currently working on
                        our undergraduate thesis titled &quot;Using Remote Sensing to track Sidewalk Accessibility Issues to improve Urban Planning&quot;. In this
                        study, we want to determine the accessibility of sidewalks by giving them scores based on a certain criteria. With this, we can map
                        out the accessibility of sidewalks in the Philippines and allow for evidence-based solutions and policies in the future. </P>
                    <br />
                    <P> As of the moment, we are in the process of annotating obstructions found in images of sidewalks. These labels will be used to
                        re-train a computer vision model to automatically detect obstructions in the future. In order to successfully re-train the computer
                        vision model, we would need a large number of annotations, hence we are looking for volunteers to label the images that we have
                        prepared. </P>
                    <br />
                    <H3 className="mb-2"> Procedure</H3>
                    <P> Register to Atlas through the &quot;Contribute&quot; Page, and provide the following:</P>
                    <div className="mx-5">
                        <P> •	Username </P>
                        <P> •	Email address </P>
                        <P> •	Password </P>
                        <P> •	City of Residence </P>
                        <P> •	Age </P>
                        <P> •	Usage of mobility aids </P>
                        <P> •	Frequency of commuting in a public utility vehicle </P>
                    </div>
                    <br />
                    <P> After registering for annotation task, you may continue on to annotate street view images in our website.
                        You are to:  </P>
                    <div className="mx-5">
                        <P> •	Select obstructions that can be found along the sidewalk </P>
                        <P> •	Create new bounding boxes around obstructions that have not yet been annotated. </P>
                        <P> •	Rate the sidewalk accessibility from 1 to 10.  </P>
                        <P> •	Determine the surface type of the sidewalk, or if there is no sidewalk present in the image.</P>
                    </div>
                    <br />
                    <H3 className="mb-2"> Informed Consent</H3>
                    <P> By participating in our study, you agree to the following: </P>
                    <div className="mx-5">
                        <P> •	I agree to participate in the data collection procedure of this study.</P>
                        <P> •	I have read and understood the background of the research and procedure for the annotation task,
                            as indicated in the overview and procedure section.</P>
                        <P> •	I acknowledge that I have been provided with the opportunity to ask questions and request for
                            clarifications regarding the research study.</P>
                        <P> •	I understand that my participation is completely voluntary and that I have the right to withdraw
                            my participation at any time.</P>
                        <P> •	I understand that all my user data will be kept confidential and will only be used by the proponents
                            of this research. </P>
                    </div>
                    <br />
                    <H3 className="mb-2"> What User Data We Collect</H3>
                    <P> When you visit the website, we may collect the following data: </P>
                    <div className="mx-5">
                        <P> •	Your email address and password used for this website.</P>
                        <P> •	Other information such as city of residence, age, usage of mobility aids, frequency of commuting in a public
                            utility vehicle.</P>
                        <P> •	Your user activities such as the images you will annotate using our website.</P>
                    </div>
                    <br />
                    <H3 className="mb-2"> Why We Collect Your Data</H3>
                    <P> We are collecting your data for several reasons: </P>
                    <div className="mx-5">
                        <P> •	To better understand the profile / background of our users.</P>
                        <P> •	To improve our research on the accessibility of sidewalks in the Philippines.</P>
                    </div>
                    <br />
                    <H3 className="mb-2"> Safeguarding and Securing the Data</H3>
                    <P> The student researchers are committed to securing your data and keeping it confidential.
                        They have done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest
                        technologies and software, which help safeguard all the information we collect. The student researchers will not lease,
                        sell or distribute your personal information to any third parties, all the information will solely be for the purpose of
                        our research.</P>
                    <br />
                    <H3 className="mb-2"> Restricting the Collection of your Personal Data</H3>
                    <P> At some point, you might wish to restrict the use and collection of your personal data.
                        You can achieve this by doing the following:</P>
                    <P> If you have already agreed to share your information with us, feel free to contact us via email, or through our social
                        media accounts, and we will be more than happy to change this for you.</P>
                    <br />
                    <br />
                </div>
            </section>
        </Page>
    );
}
