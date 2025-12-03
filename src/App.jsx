import Header from "./components/Header";
import Router from "./components/Router";

/**
 * Main application component that renders the header and the router.
 *
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}
export default App;
