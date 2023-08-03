import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import StudyContent from '../components/StudyContent/StudyContent'





export default function StudyContentPage() {
  const location = useLocation()
  const content = location.state
  return (
    <>
      <Header />

      <StudyContent content={content} />
      <Footer />
    </>
  )
}
