import { Fragment } from "react";
import MainNavigation from "./main-navigation"

/**
 * The Layout function returns a fragment that contains the MainNavigation component and the children
 * of the Layout component.
 * @param props - This is a JavaScript object that contains all the attributes passed to the component.
 * @returns A fragment of the MainNavigation and the children of the Layout component.
 */
function Layout(props) {

  return (
    <Fragment>
        <MainNavigation/>
        <main>
            {props.children}
        </main>
    </Fragment>
  )
}

export default Layout;