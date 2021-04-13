import React from 'react';
import './Main.scss';

const Committee = () => {
    let committeeCurrent = [
        {
            date: 'October 5, 2020 to Date',
            desc: 'Curriculum Committee for Post-Baccalaureate Pro-gram in Data Science, Thompson Rivers University'
        },
        {
            date: 'January 1, 2020 to Date',
            desc: 'Senate Research Committee, Thompson Rivers University'
        }, 
        {
            date: ' September 1, 2019 to Date',
            desc: 'Chair, Award and Scholarship Committee, Master of Data Science, Thompson Rivers University'
        }, 
        {
            date: 'September 1, 2019 to Date',
            desc: 'Graduate Committee, Master of Data Science, Thompson Rivers University'
        }, 
        {
            date: 'July 1, 2019 to Date',
            desc: 'Graduate Program Committee, Master of Data Science,Thompson Rivers University'
        }, 
        {
            date: 'May 1, 2019 to Date',
            desc: 'Equivalent workload committee, Faculty Association, Thompson Rivers University'
        },
        {
            date: 'January 2019 to Date',
            desc: 'Recruitment and retention committee, Department of mathematics and statistics, Thompson Rivers University'
        },
    ]
    let committeePast = [
        
        {
            date: 'May 1, 2019 to Date',
            desc: 'Equivalent workload committee, Faculty Association, Thompson Rivers University'
        },
        {
            date: 'January 2019 to Date',
            desc: 'Recruitment and retention committee, Department of mathematics and statistics, Thompson Rivers University'
        },
    ] 

    return (
        <section className='committee'>
            <h2 className='heading'>Committee Membership </h2>
            <h3 className='subHeading'>Current: </h3>
            <ol className='committee__list'>
            {committeeCurrent.map((Committee,i) => 
                <li className='committee__item' key={i}>
                    <p className='committee__info'><span className= 'committee__date'>{Committee.date}</span>: {Committee.desc}</p>
                </li>
            )}
            </ol>
            <h3 className='subHeading'>Past: </h3>
            <ol className='committee__list'>
            {committeePast.map((Committee,i) => 
                <li className='committee__item' key={i}>
                    <p className='committee__info'><span className= 'committee__date'>{Committee.date}</span>: {Committee.desc}</p>
                </li>
            )}
            </ol>
        </section>
    )
}
export default Committee;