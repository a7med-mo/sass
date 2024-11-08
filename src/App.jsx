import AddPost from "./components/AddPost/AddPost";
import Baner from "./components/Baner/Baner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Baner />
        <Posts />
        <AddPost />
        <Footer />
      </QueryClientProvider>

    </>
  )
}
