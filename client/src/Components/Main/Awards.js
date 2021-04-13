import React from 'react';
import './Main.scss';

function Awards(){
    return(
        <section className='awards'>
            <h2 className='heading'>Awards </h2>
            <ol className='awards__list'>
                <li className='awards__item'>
                    The Thompson Rivers University Internal Research Fund: $5,000, Research
                    Project: Ensemble of models for big data with applications to genetics
                </li>
                <li className='awards__item'>
                    TRU Undergraduate Research Apprenticeship Fund: $3,000, Research Project:
                    Relationships between anthropogenic stresses and biological conditions of Detroit
                    River Area of Concern (AOC)
                </li>
                <li className='awards__item'>
                    Received honourable mention for my talk “Ensembling Classification
                    Models Based on Phalanxes of Variables with Applications in Drug Discovery”
                    in the SSC 2013 Annual Meeting in Edmonton, Alberta, Canada.
                </li>
                <li className='awards__item'>
                    Student Travel Award ($500), 2012, Statistical Society of Canada (SSC).
                </li>
                <li className='awards__item'>
                    Faculty of Science Graduate Award ($12,084.71), September 2009 - August 2012, UBC.
                </li>
                <li className='awards__item'>   
                    Dr. Quazi Motahar Hossain Foundation Award, 1999, University of Dhaka
                </li>
            </ol>
            <h2 className='heading'>Grants </h2>
            <ol className='awards__list'>
                <li className='awards__item'>
                    Grant: $6,000, Research Project: Compiling and Assessing Environmental Stress
                    Data for the Detroit River and Lake Erie, 2018
                </li>
                <li className='awards__item'>
                    Grant: $14,000, 2014, University of Toronto Internal Research Support, Toronto,
                    Ontario, Canada.
                </li>
                <li className='awards__item'>
                    Graduate Student Travel Fund ($500), 2012, Graduate Student Society,
                    The University of British Columbia (UBC)
                </li>
                <li className='awards__item'>
                    National Science and Technology Fellowship, 2000, University of Dhaka
                </li>
            </ol>
            <h2 className='heading'>Scholarships </h2>
            <ol className='awards__list'>
                <li className='awards__item'>
                    Graduate Entrance Scholarship ($3000), 2008 - 2009, UBC
                </li>
                <li className='awards__item'>
                    International Partial Tuition Scholarship, 2008 - 2011, UBC
                </li>
                <li className='awards__item'>
                    Scholarship: President Scholarship, 2006, University of Windsor (declined)
                </li>
                <li className='awards__item'>
                    Tuition Scholarship, 2006, University of Windsor
                </li>
                <li className='awards__item'>
                    International Partial Tuition Scholarship, 2005, University of Windsor
                </li>
            </ol>

        </section>
    )
}

export default Awards;