
import { Inter } from 'next/font/google'
import SimpleSlider from '@/components/SimpleSlider'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eliza-k premium furniture',
  description: 'Eliza-k premium furniture',
  keywords: ['Eliza-k', 'eliza', 'home'],
}

const Home = () => <SimpleSlider />;
export default Home;