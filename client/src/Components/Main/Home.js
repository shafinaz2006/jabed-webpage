import React from 'react';
import './Main.scss';
import resume from '../../Assets/document/resume.pdf';

function Home(){
    return(
        <section className='home'>
            <p className='home__text'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
            <h2 className='heading'>Education</h2>
            <ul className='home__list'>
                <li className='home__item'>
                    <span className='text--bold'>Ph.D. in Statistics (2013)</span>: The University of British Columbia (UBC), 
                    Vancouver, BC, Canada (Average Grade 92%). Thesis Title: Rare-class Classification
                    using Ensembles of Subsets of Variables. Supervisors: Willim J. Welch & Ruben
                    H. Zamar
                </li>
                <li className='home__item'>
                    <span className='text--bold'>M.Sc. in Statistics (2007)</span>: University of Windsor, Windsor, ON, Canada
                    (GPA 4 out of 4). Thesis Title: Modelling Fish IBI with Agricultural Stress
                    Gradient and Estimation of Threshold Effects. Supervisors: Karen Y. Fung &
                    Jan J.H. Ciborowski
                </li>
            </ul>
            <h2 className='heading'>Employment History</h2>
            <ul className='home__list'>
                <li className='home__item'>
                    Assistant Professor, Department of Mathematics and Statistics, 
                    Thompson Rivers University (2018 to Date)
                </li>
                <li className='home__item'>
                    Mendelzon Visiting Assistant Professor, Department of Computer and Mathematical Sciences, University of Toronto Scarborough (2014 to 2018)
                </li>
                <li className='home__item'>
                    Postdoctoral Fellow, Department of Statistics, University of British Columbia, Vancouver (Jan 2014 to Jul 2014)
                </li>
            </ul>
            <a className='button' href = {resume} target = '_blank' rel='noopener noreferrer'>Full Resume</a>
        </section>
    )
}
export default Home;