import classNames from 'classnames';
import styles from './_index.module.scss';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import commonStyles from '~/styles/common-styles.module.scss';
import { getUrlOriginWithPath } from '~/utils';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div className={styles.root}>
            <header className={styles.title}>
                <h1>NZ Organics Group</h1>
            </header>
            <section className={styles.paragraph}>
                <p className={styles.text}>
                    {`NZ Organics Group Limited is dedicated to building a leading New Zealand-based export and production
                     business, specializing in natural, organic, and GMO-free products. Our mission is to unite a number of New Zealand's 
                     top food production companies, including Over the Moon Dairy, Manuka Health, and Eggs of NZ, to create a 
                     global powerhouse focused on premium, organic food products for international markets.`}
                    <br /> <br />
                    {`With a strong emphasis on expanding into the Asian and Middle Eastern markets, NZ Organics Group is proud 
                    to bring together award-winning dairy products from Over the Moon, the renowned Manuka honey from Manuka Health, 
                    and the Organic/Non-GMO eggs from Eggs of NZ. In addition, Eggs of NZ is working on the development of several new 
                    and exciting egg products, set to be introduced in the future.`}
                    <br /> <br />
                    {`NZ Organics Group is actively negotiating with potential partners to integrate various companies into the 
                    group, with plans for both full and majority ownership, ensuring a mix of 100% and shared equity with current 
                    owners.`}
                </p>
            </section>
            <button className={classNames(commonStyles.primaryButton, styles.button)}>
                Learn more
            </button>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Website Starter';
    const description = 'Welcome to the Website Starter';
    //const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
    ];
};
