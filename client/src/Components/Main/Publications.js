import React from 'react';
import './Main.scss';

function Publications() {
    return (
        <section className='publications'>
            <h2 className='heading'>Publications </h2>
            <h3 className='subHeading'>2021</h3>
            <ol className='publications__list'>
                <li className='publications__item'>
                    Khan, JR, <span className='text--bold'>Tomal, JH </span>, and Raheem, E. (2021) Model and Variable Selection
                    using Machine Learning Methods with Applications to Childhood Stunting in Bangladesh.
                    <span className='text--italic'> Informatics for Health and Social Care (Taylor and Francis)</span> (Ac-
                    cepted/In press)
                </li>
                <li className='publications__item'>
                    <span className='text--bold'>Tomal, JH </span>, Rahmati, S, Boroushaki, S, Jin, L, and Ahmed, E. (2021) The
                    Impact of COVID-19 on Students’ Marks: A Bayesian Hierarchical Modeling
                    Approach. <span className='text--italic'> METRON (Springer Nature).</span>

                    <a href='https://doi.org/10.1007/s40300-021-00200-1' className='publications__link' target='_blank' rel='noopener noreferrer'>
                        https://doi.org/10.1007/s40300-021-00200-1
                    </a>
                </li>
                <li className='publications__item'>
                    <span className='text--bold'>Tomal, JH </span>, and Ciborowski, JJH. (2020) Ecological Models for Estimating
                    Breakpoints and Prediction Intervals.
                    <span className='text--italic'> Ecology and Evolution (Wiley).</span> 10:13500–
                    13517.
                    <a className='publications__link' target='_blank' rel='noopener noreferrer' href='https://doi.org/10.1002/ece3.6955'>
                        https://doi.org/10.1002/ece3.6955
                    </a>
                </li>
                <li className='publications__item'>
                    Evans, M., and <span className='text--bold'>Tomal, JH</span>. (2018)
                Measuring Statistical Evidence and Multiple Testing. 
                <span className='text--italic'> FACETS</span>. 3: 563-583.
                <a className='publications__link' target='_blank' rel='noopener noreferrer' href='https://doi.org/10.1139/facets-2017-0121'>
                        https://doi.org/10.1139/facets-2017-0121</a>
                </li>
                <li className='publications__item'>
                    <span className='text--bold'>Tomal, JH</span>, Welch, WJ, and Zamar, RH. (2017). Discussion of “Random-
                    projection Ensemble Classification” by T.I. Cannings and R.J. Samworth. 
                    <span className='text--italic'> Journal of the Royal Statistical Society: Series B (Statistical Methodology)</span>. 
                    79(4):1024-1025.
                    <a className='publications__link' target='_blank' rel='noopener noreferrer' href='https://doi.org/10.1111/rssb.12228'>
                        https://doi.org/10.1111/rssb.12228
                    </a>
                </li>
                <li className='publications__item'>
                    <span className='text--bold'>Tomal, JH</span>, Welch, WJ, and Zamar, RH. (2016). Exploiting Multiple Descriptor
                    Sets in QSAR Studies. 
                    <span className='text--italic'> Journal of Chemical Information and Modeling</span>. 56(3):501-509. 
                    <a className='publications__link' target='_blank' rel='noopener noreferrer' href='https://doi.org/10.1021/acs.jcim.5b00663'>
                        https://doi.org/10.1021/acs.jcim.5b00663
                    </a>
                </li>
                <li className='publications__item'>
                    <span className='text--bold'>Tomal, JH</span>, Welch, WJ, and Zamar, RH. (2015). Ensembling Classification
                    Models Based on Phalanxes of Variables with Applications in Drug Discovery.
                    <span className='text--italic'> The Annals of Applied Statistics</span>, 9(1): 69-93. 
                    <a className='publications__link' target='_blank' rel='noopener noreferrer' 
                        href='https://doi.org/10.1214/14-AOAS778'>
                        https://doi.org/10.1214/14-AOAS778 
                    </a>
                </li>
                <li className='publications__item'>
                    Hossain, MZ, <span className='text--bold'>Tomal, JH</span>, and Hossain, MB. (July 2008). An Approach of
                    Selecting Correlation Structure in GEE. 
                    <span className='text--italic'>Dhaka University Journal of Sciences </span>,
                    56(2): 189-193.
                </li>
                <li className='publications__item'>
                    <span className='text--bold'>Tomal, JH</span>. (January 2006). Extended Breslow et al. Test for Proportional
                    Hazards Hypothesis. 
                    <span className='text--italic'> Dhaka University Journal of Sciences </span>, 54(1): 89-94.
                </li>
                <li className='publications__item'>
                    <span className='text--bold'>Tomal, JH</span>, Khan, HTA, Hossain, MZ and Shabuz, MZR. (2005). Factors As-
                    sociated with Pregnancy Complications During Antenatal Period: An Extended
                    GEE Approach. <span className='text--italic'>BRAC University Journal </span>, 2(2): 13-22.
                </li>
                <li className='publications__item'>
                    Khan, HTA, Bhuiyan, MBH and <span className='text--bold'>Tomal, JH</span>. (June 2005). Fertility Behavior of
                    Married Adolescent Women in Bangladesh. 
                    <span className='text--italic'> Journal of Sociology</span>, 1(1): 7-20.
                </li>
                <li className='publications__item'>
                <span className='text--bold'>Tomal, JH</span> and Islam, MA. (July 2004). Proportionality Test and Survival
                    Function for Two-stage Data, 
                    <span className='text--italic'> Dhaka University Journal of Sciences</span>, 52(3): 361-
                    367.
                </li>
                <li className='publications__item'>
                    Khan, HTA, <span className='text--bold'>Tomal, JH</span> and Bhuiyan, MBH. (June 2004). Contraceptive Prac-
                    tice Behavior among Married Adolescent Women in Bangladesh. 
                    <span className='text--italic'>  Journal of Pre-
                    ventive and Social Medicine (JOPSOM)</span>, 23(1): 1-11.
                </li>
            </ol>
            <h3 className='subHeading'>Non-refereed:</h3>
            <ol className='publications__list'>
                <li className='publications__item'>
                    <span className='text--bold'>Tomal, JH</span>, Hsu, G, Welch, WJ, and Wang, M. (2020) EPX: Ensemble of Pha-
                    lanxes. R 
                    <span className='text--italic'>package version 1.0.3</span>. 
                    <a className='publications__link' target='_blank' rel='noopener noreferrer'
                        href='https://cran.r-project.org/web/packages/EPX/index.html'>
                            https://cran.r-project.org/web/packages/EPX/index.html
                    </a>
                </li>
                <li className='publications__item'>
                    <span className='text--bold'>Tomal, JH</span>, and Ciborowski, JJH. (2020) Datasets relating (i) A wetland fish
                    multimetric index to variation in agricultural stress among Laurentian Great
                    Lakes coastal wetlands, (ii) Cyanobacteria biomass to total phosphorus concen-
                    trations among Canadian lakes. <span className='text--italic'>  Dryad, Dataset</span>. 
                    <a className='publications__link' target='_blank' rel='noopener noreferrer'
                        href='https://doi.org/10.5061/dryad.g79cnp5nr'>
                    https://doi.org/10.5061/dryad.g79cnp5nr
                    </a>
                </li>
                <li className='publications__item'>
                    Ciborowski, JJH, Landry, J, Wang, L, and <span className='text--bold'>Tomal, JH</span>. (2020) Compiling and
                    Assessing Environmental Stress Data for the Detroit River Area of Concern.
                    <span className='text--italic'> Environment and Climate Change Canada</span>
                </li>
                <li className='publications__item'>
                    Cai, Y, Cai, J, Chen, J, Golchi, S, Guan, M, Karim, ME, Liu, Y, 
                    <span className='text--bold'>Tomal, JH</span>,
                    Xiong, C, Zhai, Y, Lum, C, Welch, WJ, Zidek, JV. (2016) An Epirical Experiment
                    to Assess the Relationship Between the Tensile and Bending Strengths of Lumber.
                    <span className='text--italic'> Technical Report</span>, Department of Statistics, The University of British Columbia,
                    Vancouver, BC, Canada. 
                    <a className='publications__link' target='_blank' rel='noopener noreferrer'
                        href='https://www.stat.ubc.ca/Research/TechReports/tr/276.pdf'>
                    https://www.stat.ubc.ca/Research/TechReports/tr/276.pdf
                    </a>
                </li>
                
            </ol>

        </section>
    )
}
export default Publications;