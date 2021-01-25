import '../styles/global.css'
import { AppProps } from 'next/app'

// this is the top-level component
const App = ({ Component, pageProps }: AppProps) => {

 return <Component {...pageProps} />
}

export default App
