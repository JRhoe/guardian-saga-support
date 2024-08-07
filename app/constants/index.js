import defenseImg from '../../public/PraxeumPics/SelfDefense.JPG';
import teamImg from '../../public/PraxeumPics/Team.jpg';
import classImg from '../../public/PraxeumPics/Class.jpg';
import campImg from '../../public/PraxeumPics/Camp.jpg';

export const applications = [
    {
        title: "Team Building Workshop",
        requirements: ["Minimum of 8 attendees", "Ages 8-13 or Ages 14+", "Provide transpotation to San Jose, CA"],
        imgUrl: teamImg,
        link: "team"
    },
    {
        title: "Self-Defense Workshop",
        requirements: ["Minimum of 12 attendees", "Ages 8-13 or Ages 14+", "Attended Team Building Workshop", "Each participant must have a partner of similar size"],
        imgUrl: defenseImg,
        link: "defense"
    },
    {
        title: "Scolarship for Classes",
        requirements: ["Attened at least one workshop", "Reliable transpotation", "Live within 15 minutes of San Jose, CA"],
        imgUrl: classImg,
        link: "class"
    },
    {
        title: "Scholarships for Summer Camps",
        requirements: ["Attended at least one workshop", "Reliable transpotation", "Ages 8-14"],
        imgUrl: campImg,
        link: "camp"
    },
]

export const events = [
    {
        title:"FLY Workshop",
        date: "May 2023",
        para: "Fresh Lifelines for Youth",
        link: ""
    },
    {
        title:"FCSN Workshop",
        date: "January 2024",
        para: "Friends of Children with Special Needs",
        link: ""
    },
    {
        title:"FCSN 2nd Workshop",
        date: "May 2024",
        para: "Friends of Children with Special Needs",
        link: ""
    },
    {
        title:"AICRC Workshop",
        date: "July 2024",
        para: "American Indian Child Resource Center",
        link: ""
    },
]