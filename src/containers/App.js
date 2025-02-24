import React, {useEffect, useState} from "react";
import Card from "../components/card";
import Scroll from "../components/scroll";


function App() {
    //States
    const [searchQuery, setSearchQuery] = useState("");
    const [robots, setRobots] = useState([]); // Store API data
    const [loading, setLoading] = useState(true);

    //Search Query
    function handleSeachQurey(e) {
        setSearchQuery(e.target.value)
    }

    //Filtered Array
    const filteredArray = robots.filter(item =>
        item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );

    //Fetch data
    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();

                if (isMounted) {
                    setRobots(data);
                    setLoading(false);
                }
            } catch (error) {
                if (isMounted) console.error("Error fetching data:", error);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        }
    }, []);

    //component
    return (
        <div className={"cardList"}>
            <input
                className="search"
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={handleSeachQurey}
            />
            {loading ? <p style={{"color": "white"}}>loading...</p> :
                <Scroll>
                    <div className="cardItems">
                        {filteredArray.map((item) => <Card key={item.id} id={item.id} name={item.name}
                                                           email={item.email}/>)}
                    </div>
                </Scroll>
            }

        </div>
    );
}

export default App;

