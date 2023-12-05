import { Button, MantineProvider } from "@mantine/core";
import Footer from "./components/footer";
//import theme from "./mantine-theme";

function App() {
  return (
    <MantineProvider /* theme={theme} */>
      <div className="grid min-h-screen grid-rows-[1fr_auto]">
        <div className="mx-auto flex flex-cols-[1fr_1fr] gap-6">
          <main className="w-[400px]">
            <h1 className="my-6">Scout Badge Generator</h1>
            <Button>Example Button</Button>
          </main>
          <section>
            <div className="top-0 sticky pt-8">
              <p className=" w-[400px] h-[400px] border rounded">PREVIEW</p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </MantineProvider>
  );
}

export default App;
