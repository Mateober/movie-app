import React, { useEffect, useState } from 'react';
import { getPopularPeople } from '../api/api';
import { Loading } from '../ui/Loading/Loading';
import { PeopleCard } from '../components/people/PeopleCard';

export const PeoplePage = () => {
    console.log('peoplePage');
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
        <>
            <div className="div-title-page">
                <h1 className="title-page">FAMOUS PEOPLE</h1>
            </div>

            <div className="containerPeople">
                <div className="container-people">
                    {people.map((person) => (
                        <PeopleCard key={person.id} person={person} />
                    ))}
                </div>
            </div>
        </>
    );
};
