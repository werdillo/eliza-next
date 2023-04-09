
import { Inter } from 'next/font/google'
import SimpleSlider from '../components/SimpleSlider'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <SimpleSlider />;
}
