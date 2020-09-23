
//const App = function() {
import CommentDetail from "./components/CommentDetail"; // done by webpack, so no need to put .js
import ApprovalCard from "./components/ApprovalCard";
import React from "react";

const App1 = () => {   // ES2015 arrow function
    //return <div> Hi there3! </div>;   // this return value is a JSX, it's not html, it will be converted to normal JS code
    return (
        <div className="ui container comments">
            {window.navigator.geolocation.getCurrentPosition(
                (position) => console.log(position),
                (err) => console.log(err)
            )}
            {/*// here it's referring to a component, not a variable, so using element tag,*/}
            <CommentDetail author={'Sam'}/>
            not braces.
            <CommentDetail author={'Alex'}/>
            <CommentDetail author={'Jane'}/>
            <CommentDetail/>
            <ApprovalCard>
                <CommentDetail/>
            </ApprovalCard>
            <ApprovalCard>
                <h4>Warning</h4>
                <div>
                    Are you sure?
                </div>
            </ApprovalCard>
        </div>

    );
};

export default App1