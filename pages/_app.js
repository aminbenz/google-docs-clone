import 'tailwindcss/tailwind.css';
import '../styles/editor.css';
import { Provider } from 'next-auth/client';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
