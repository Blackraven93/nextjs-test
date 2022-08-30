import { NextPage } from "next";
import Head from 'next/head'
interface IProps {
  title: string
}

const SEO:NextPage<IProps> = ({title}) => {
  return (
    <Head>
      <title>{title} | Next</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

export default SEO;