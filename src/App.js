import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Style Sheet URL:</h1>
      <p>Copy the below URL and Paste it at the top of the CSS file</p>
      <textarea rows="10" cols="40">
        @import
        url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap');
      </textarea>
      <h2>Reference Image:</h2>
      <img
        src="https://res.cloudinary.com/dwwimfezn/image/upload/v1671639062/Screenshot_513_mevfzg.png"
        alt="ref"
      />

      <h1>Background Image URL: </h1>
      <textarea rows="5" cols="40">
        https://us.123rf.com/450wm/pilvitus/pilvitus1903/pilvitus190300028/pilvitus190300028.jpg?ver=6
      </textarea>
    </div>
  );
}

export default App;
