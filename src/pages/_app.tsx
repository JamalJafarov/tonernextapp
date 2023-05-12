import "primereact/resources/primereact.min.css";    
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
