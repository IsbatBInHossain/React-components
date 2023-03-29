import Accodion from "./components/Accodion";
// import ButtonPage from "./pages/ButtonPage";

const App = () => {
  const items = [
    {
      id: "kj2h3",
      label: "Can I use React here?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptates harum dicta sit ullam suscipit sunt provident quidem, nam quam.",
    },
    {
      id: "5kl4l",
      label: "Can I use JavaScript here?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptates harum dicta sit ullam suscipit sunt provident quidem, nam quam.",
    },
    {
      id: "86jlk",
      label: "Can I use CSS here?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptates harum dicta sit ullam suscipit sunt provident quidem, nam quam.",
    },
  ];
  return (
    <div>
      {/* <ButtonPage /> */}
      <Accodion items={items} />
    </div>
  );
};
export default App;
