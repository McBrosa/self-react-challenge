import React, { Suspense } from "react";
import "./App.scss";
import { InfoForm } from "./components";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InfoForm />
    </Suspense>
  );
}

export default App;
