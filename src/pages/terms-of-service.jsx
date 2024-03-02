import Page from '@/ui/page';
import H1 from 'ui/heading/h1';
import H2 from 'ui/heading/h2';
// import H3 from 'ui/heading/h3';
import P from 'ui/heading/p';
// CAN DELETE THIS PAGE
export default function Index() {
    return (
        <Page
            title="Terms of Service - Atlas"
            description="This is our Terms of Service for using Atlas."
            contribute={false}
        >
            <section className='container mx-auto px-5'>
                <H1> Terms of Service </H1>
                <br />
                <H2> heading </H2>
                <P> this our Terms of Service etc etc.</P>
                <br />
            </section>
        </Page>
    );
}
