import React from 'react';
import styles from './page.module.css';
import Events from '@/app/components/ui/events/Events';
import { events } from '@/app/constants';

const Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.timeline}>
                <div className={styles.line} style={{"animationDuration":`${(events.length*2)}s`}}></div>
                {events.map((tile, index) => (
                    <Events
                    title={tile.title}
                    date={tile.date}
                    para={tile.para}
                    link={tile.link}
                    direction={index % 2 === 0 ? "left" : "right"}
                    index={index}
                    key={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default Page;
