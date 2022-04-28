import Directory from "../../components/Directory/Directory";
import { Outlet } from "react-router-dom";

import img1 from "../../images/default/hat.webp";
import img2 from "../../images/default/jacket.webp";
import img3 from "../../images/default/sneakers.webp";
import img4 from "../../images/default/jeans.webp";
import img5 from "../../images/default/perch.webp";

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'Кепки',
            imageUrl: img1,
        },
        {
            id: 2,
            title: 'Толстовки',
            imageUrl: img2,
        },
        {
            id: 3,
            title: 'Кроссовки',
            imageUrl: img3,
        },
        {
            id: 4,
            title: 'Джинсы',
            imageUrl: img4,
        },
        {
            id: 5,
            title: 'Перчатки',
            imageUrl: img5,
        },
    ]

    return (
        <div>
            <Outlet />
            <Directory categories={categories} />
        </div>
    )
};

export default Home;