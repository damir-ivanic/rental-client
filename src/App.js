import React, { Suspense } from "react";
import Dashboard from "./containers/dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";

const loading = () => <div>Loading ...</div>;

function App() {
  return (
    <Suspense fallback={loading()}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Suspense>
  );
}

// const initialResource = fetchRentalPeriod();

// function App() {
//   const [resource, setResource] = useState(initialResource);
//   return (
//     <div>
//       <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
//         <Suspense fallback={<h1>Loading...</h1>}>
//           <Dashboard resource={resource} />
//           <button onClick={() => setResource(fetchRentalPeriod())}>
//             Refresh
//           </button>
//         </Suspense>
//       </ErrorBoundary>
//     </div>
//   );
// }

export default App;
