import Head from 'next/head'
import db from '../../../db.json'

function Header() {
  return (
    <>
      <Head>
        <title>{db.title}</title>
        <meta property="og:title" content={db.title} key={db.title} />
        <meta property="og:description" content={db.description}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={db.url}/>
        <meta property="og:image" content={db.bg}/>
      </Head>
    </>
  )
}

export default Header