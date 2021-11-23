import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  //return <Component {...pageProps} />
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag('config', 'G-BFJGL2563L', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(async () => {
    const { default: ReactPixel } = await import('react-facebook-pixel');
    ReactPixel.init('1083310298772388', null, {
        autoConfig: true,
        debug: true,
      });
    ReactPixel.pageView();
    ReactPixel.track("ViewContent")
  });

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle")
  }, []);
  

  return (
    <>
    <Head>
    // Responsive meta tag
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="facebook-domain-verification" content="eaw09084tc0bpcfl2ukw56x6cmybeh" />
    <link rel="shortcut icon" href="/favicon.png" />
    <link rel="preload" href="/fonts/AlyssumSans/AlyssumSans.TTF" as="font" crossOrigin="" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link async defer href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    //  bootstrap CDN
    {/* <link
    strategy="lazyOnload" async href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
    crossorigin="anonymous" 
    />
    <script
    strategy="lazyOnload" async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossorigin="anonymous"></script> */}
    <script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-BFJGL2563L"></script>
    <script strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BFJGL2563L', { page_path: window.location.pathname });
        `,
      }}
    />
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          var i = 1;                   
          function myLoop () {          
            setTimeout(function () {   
              if(i == 10){
                jQuery("div.progress-bar > .brick:nth-child("+i+")").css("background", "linear-gradient(90deg, #ffc531 50%, #969696 50%)");
                jQuery("div.progress-bar > .brick:nth-child("+i+") > .brick:nth-child(2)").css("background", "#ffc531");
              }else{
                jQuery("div.progress-bar > .brick:nth-child("+i+")").css("background", "#ffc531");
                jQuery("div.progress-bar > .brick:nth-child("+i+") > .brick:first-child").css("background", "#ffc531");
                jQuery("div.progress-bar > .brick:nth-child("+i+") > .brick:nth-child(2)").css("background", "#ffc531");
              }
              i++;                    
              if (i < 11) {           
                myLoop();            
              }                        
            }, 200)
            }
          myLoop();
        `,
      }}
    />
    </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
