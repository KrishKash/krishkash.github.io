import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Certification.css'
import { MdVerified } from 'react-icons/md';

function CertificationCard({ id, title, details, date, issuer, url }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        certificationCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();
    return (
        <Fade bottom>
            <div key={id} className={`certification-card ${classes.certificationCard}`}>
                <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{ color: theme.tertiary }}>{title}</h2>
                        <p style={{ color: theme.tertiary80 }}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{ color: theme.primary }}>
                        <h5>{issuer}</h5>
                        <div className="achievecard-field">
                            <MdVerified />
                            <a
                                title='Click to view certificate'
                                href={url}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <h5>Certificate</h5></a>
                        </div>
                    </div>
                </div>
                {/* <div className="achievecard-imgcontainer">
                    <img src={image} alt="" />
                </div> */}
            </div>
        </Fade>

    )
}

export default CertificationCard
