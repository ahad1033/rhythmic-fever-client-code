import { useEffect, useState } from "react";
import ClassesCards from "./ClassesCards";

const Classes = () => {

    const [classes, setClasses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    }, [])

    return (
        <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 mx-auto p-2 m-2">
            {
                classes.map(classes => <ClassesCards
                    key={classes._id}
                    classes={classes}
                ></ClassesCards>)
            }
        </div>
    );
};

export default Classes;