import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import mainMenu from "./menu/main-menu";
import { RouteMenu } from "./menu/route.model";
import NotFoundScreen from "UI/pages/NotFound";
import AuthRoute from "shared/components/authorization/AuthRoute";
import ExamplePage from "UI/pages/ExamplePage";

/**
 * route dạng /:id cần phải để phía sau tránh bị ghi đè
 * VD: có products/:id và products/variants
 * nếu để products/:id trước thì products/variants sẽ không được match
 */
const childRoute: Array<RouteMenu> = [];

const listMenu = () => {
  let list: Array<RouteMenu> = [];
  mainMenu.forEach((item) => {
    list = [...list, ...getAllRoute(item)];
  });
  return list;
};

const getAllRoute = (route: RouteMenu) => {
  let temps: Array<RouteMenu> = [];
  if (route.subMenu.length > 0) {
    route.subMenu.forEach((subItem: RouteMenu) => {
      let menu = getAllRoute(subItem);
      temps = [...temps, ...menu];
    });
  }
  if (route.isShow) {
    if (route.path.includes(":")) {
      childRoute.push(route);
    } else {
      temps.push(route);
    }
  }
  return temps;
};
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ExamplePage />,
//     errorElement: <ExamplePage />,
//   },
// ]);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ExamplePage />,
//   },
// ]);

// const router = createBrowserRouter(
//   listMenu().map((single) => {
//     const { key, ...rest } = single;
//     // return <AuthRoute {...rest} key={key} />;
//     return {
//       path: single.path,
//       lazy: async () => {
//         let AuthRoute = await import("shared/components/authorization/AuthRoute");
//         return { Component: AuthRoute.default };
//       },
//     };
//   })
// );
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route errorElement={<NotFoundScreen />}>
//       <Route path="contacts" element={<NotFoundScreen />} />
//       <Route path="contacts/:contactId/edit" element={<ExamplePage />} />
//     </Route>
//   )
// );
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     // <Route errorElement={<NotFoundScreen />}>
//     //   <Route path="contacts" element={<NotFoundScreen />} />
//     //   <Route path="contacts/:contactId/edit" element={<ExamplePage />} />
//     // </Route>
//     <Route errorElement={<NotFoundScreen />}>
//       {
//         // listMenu().map((single) => {
//         //   const { key, ...rest } = single;
//         //   // return <AuthRoute {...rest} key={key} />;
//         //   return <Route path="contacts/:contactId/edit" element={<ExamplePage />}
//         // )
//         listMenu().map((single) => {
//           return (
//             <AuthRoute
//               path={single.path}
//               lazy={single.lazy}
//               title={single.title}
//             />
//           );
//         })
//       }
//     </Route>
//   )
// );

// const router = createRoutesFromElements(
//   <Route path="">
//     {
//       listMenu().map(single => {
//         return <Route path={single.path} lazy={single.lazy} />
//       })
//     }
//   </Route>
// );

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {listMenu().map((single) => {
        const { path, lazy, key, ...rest } = single;
        return (
          <Route
            key={single.key}
            path={single.path}
            lazy={single.lazy}
            loader={(loader) => {
              return {
                ...loader,
                ...single,
              };
            }}
            {...rest}
          />
        );
      })}
      {childRoute.map((single) => {
        const { path, lazy, key, ...rest } = single;
        return (
          <Route
            key={single.key}
            path={single.path}
            lazy={single.lazy}
            loader={(abc) => {
              console.log("abc", abc);
              return abc;
            }}
            {...rest}
          />
        );
      })}
    </Route>
  )
);

function MainRouteProvider() {
  return <RouterProvider router={router} />;
  // return <div>ggg</div>;
}

export default MainRouteProvider;
