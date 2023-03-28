import React, { useEffect, useState } from "react";
import { getPopularPeople } from "../api/api";
import { PeopleCard } from "../components/PeopleCard";
import { Loading } from "../ui/Loading/Loading";

export const PeoplePage = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPeople = async () => {
            const results = await getPopularPeople();
            setPeople(results);
            setLoading(false);
        };
        getPeople();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="divdiv">
            <div className="container-people">
                {people.map((person) => (
                    <PeopleCard key={person.id} person={person} />
                ))}
            </div>
        </div>
    );
};
