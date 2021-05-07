import React from 'react'
import { AiOutlineMeh, AiOutlineSmile, AiOutlineFrown } from 'react-icons/ai'
import { FaceWrapper } from './styles'

const transition = {
    duration: .5,
    ease: [.6, .01, -0.05, .9]
}

export const HappyFace = ({title, action = () => {}, selected}) => {

    return (
        <FaceWrapper title="happy" onClick={action} selected={selected} whileHover={{scale: 1.05, transition: transition}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
            <g id="Grupo_28" data-name="Grupo 28" transform="translate(-1400 -531)">
                <g id="Elipse_6" data-name="Elipse 6" transform="translate(1400 531)" fill="none" stroke="#101217" stroke-width="12">
                <circle cx="75" cy="75" r="75" stroke="none"/>
                <circle cx="75" cy="75" r="69" fill="none"/>
                </g>
                <g id="Sustracción_2" data-name="Sustracción 2" transform="translate(16757 4013.842)" fill="none">
                <path d="M-15282-3361.68a26.83,26.83,0,0,1-10.509-2.122,26.913,26.913,0,0,1-8.584-5.786,26.924,26.924,0,0,1-5.787-8.582,26.845,26.845,0,0,1-2.12-10.51,27.24,27.24,0,0,1,.344-4.321h53.314a27.29,27.29,0,0,1,.344,4.321,26.829,26.829,0,0,1-2.122,10.51,26.905,26.905,0,0,1-5.786,8.582,26.906,26.906,0,0,1-8.583,5.786A26.839,26.839,0,0,1-15282-3361.68Z" stroke="none"/>
                <path className="inner-circles" d="M -15282 -3370.680419921875 C -15279.5654296875 -3370.680419921875 -15277.208984375 -3371.155029296875 -15274.994140625 -3372.09130859375 C -15272.8525390625 -3372.997314453125 -15270.92578125 -3374.29638671875 -15269.2705078125 -3375.951904296875 C -15267.6142578125 -3377.60888671875 -15266.314453125 -3379.534423828125 -15265.4091796875 -3381.677001953125 C -15265.087890625 -3382.435791015625 -15264.8212890625 -3383.21142578125 -15264.609375 -3384.00146484375 L -15299.3896484375 -3384.00146484375 C -15299.177734375 -3383.21142578125 -15298.912109375 -3382.435791015625 -15298.5908203125 -3381.677734375 C -15297.6845703125 -3379.53515625 -15296.384765625 -3377.60888671875 -15294.7294921875 -3375.952880859375 C -15293.0732421875 -3374.296630859375 -15291.146484375 -3372.99755859375 -15289.0029296875 -3372.091064453125 C -15286.7900390625 -3371.155029296875 -15284.43359375 -3370.680419921875 -15282 -3370.680419921875 M -15282 -3361.680419921875 C -15285.64453125 -3361.680419921875 -15289.1806640625 -3362.394287109375 -15292.5087890625 -3363.802001953125 C -15295.724609375 -3365.161865234375 -15298.6123046875 -3367.1083984375 -15301.0927734375 -3369.58837890625 C -15303.572265625 -3372.068115234375 -15305.51953125 -3374.95556640625 -15306.8798828125 -3378.170654296875 C -15308.287109375 -3381.499755859375 -15309 -3385.03564453125 -15309 -3388.680419921875 C -15309 -3390.1298828125 -15308.884765625 -3391.58349609375 -15308.65625 -3393.00146484375 L -15255.341796875 -3393.00146484375 C -15255.11328125 -3391.580810546875 -15254.998046875 -3390.127197265625 -15254.998046875 -3388.680419921875 C -15254.998046875 -3385.03564453125 -15255.7119140625 -3381.499755859375 -15257.1201171875 -3378.170654296875 C -15258.4794921875 -3374.95556640625 -15260.4267578125 -3372.068115234375 -15262.90625 -3369.58837890625 C -15265.3857421875 -3367.10888671875 -15268.2734375 -3365.161865234375 -15271.4892578125 -3363.802001953125 C -15274.818359375 -3362.394287109375 -15278.3544921875 -3361.680419921875 -15282 -3361.680419921875 Z" stroke="none" />
                </g>
                <g id="Grupo_23" data-name="Grupo 23" transform="translate(-4)">
                    <circle className="inner-circles" id="Elipse_8" data-name="Elipse 8" cx="7.5" cy="7.5" r="7.5" transform="translate(1449 579)" fill="#101217"/>
                    <circle className="inner-circles" id="Elipse_15" data-name="Elipse 15" cx="7.5" cy="7.5" r="7.5" transform="translate(1494 579)" fill="#101217"/>
                </g>
            </g>
            </svg>

            {
                title && (
                    <b>
                        {title}
                    </b>
                )
            }
        </FaceWrapper>
    )
    
}

export const RelaxFace = ({title, action = () => {}, selected}) => {

    return (
        <FaceWrapper title="neutral" onClick={action} selected={selected} whileHover={{scale: 1.05, transition: transition}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
                <g id="Elipse_18" data-name="Elipse 18" fill="none" stroke-width="12">
                    <circle cx="75" cy="75" r="75" stroke="none"/>
                    <circle cx="75" cy="75" r="69" fill="none"/>
                </g>
                <g id="Grupo_24" data-name="Grupo 24" transform="translate(-1404 -531)">
                    <circle className="inner-circles" id="Elipse_8" data-name="Elipse 8" cx="7.5" cy="7.5" r="7.5" transform="translate(1449 579)"/>
                    <circle className="inner-circles" id="Elipse_15" data-name="Elipse 15" cx="7.5" cy="7.5" r="7.5" transform="translate(1494 579)"/>
                </g>
                <path id="Trazado_1" data-name="Trazado 1" d="M15413,2977.836c3.847,10.531,36.2,10.531,39.586,0" transform="translate(-15357.793 -2873.336)" fill="none" stroke-width="9"/>
            </svg>

            {
                title && (
                    <b>
                        {title}
                    </b>
                )
            }
        </FaceWrapper>
    )
    
}
    
export const NeutralFace = ({title, action = () => {}, selected}) => {

    return (
        <FaceWrapper title="neutral" onClick={action} selected={selected} whileHover={{scale: 1.05, transition: transition}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
                <g id="Elipse_19" data-name="Elipse 19" fill="none" stroke-width="12">
                    <circle cx="75" cy="75" r="75" stroke="none"/>
                    <circle cx="75" cy="75" r="69" fill="none"/>
                </g>
                <g id="Grupo_25" data-name="Grupo 25" transform="translate(-1404 -531)">
                    <circle id="Elipse_8" className="inner-circles" data-name="Elipse 8" cx="7.5" cy="7.5" r="7.5" transform="translate(1449 579)"/>
                    <circle id="Elipse_15" className="inner-circles" data-name="Elipse 15" cx="7.5" cy="7.5" r="7.5" transform="translate(1494 579)"/>
                </g>
                <line id="Línea_1" className="inner-circles" data-name="Línea 1" x2="50" transform="translate(50.5 106.5)" fill="none" stroke-width="9"/>
            </svg>
            {
                title && (
                    <b>
                        {title}
                    </b>
                )
            }
        </FaceWrapper>
    )
    
}


export const SadFace = ({title, action = () => {}, selected}) => {

    return (
        <FaceWrapper title="sad" onClick={action} selected={selected} whileHover={{scale: 1.05, transition: transition}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
                <g id="Elipse_20" data-name="Elipse 20" fill="none"  stroke-width="12">
                    <circle cx="75" cy="75" r="75" stroke="none"/>
                    <circle cx="75" cy="75" r="69" fill="none"/>
                </g>
                <g id="Grupo_26" data-name="Grupo 26" transform="translate(-1404 -531)">
                    <circle className="inner-circles" id="Elipse_8" data-name="Elipse 8" cx="7.5" cy="7.5" r="7.5" transform="translate(1449 579)" />
                    <circle className="inner-circles" id="Elipse_15" data-name="Elipse 15" cx="7.5" cy="7.5" r="7.5" transform="translate(1494 579)" />
                </g>
                <path id="Trazado_3" data-name="Trazado 3" d="M15413,2977.836c3.847,10.531,36.2,10.531,39.586,0" transform="translate(15507.793 3091.236) rotate(180)" fill="none"  stroke-width="9"/>
            </svg>


            {
                title && (
                    <b>
                        {title}
                    </b>
                )
            }
        </FaceWrapper>
    )
    
}

export const NoneFace = ({title, action = () => {}, selected}) => {

    return (
        <FaceWrapper title="sad" onClick={action} selected={selected} whileHover={{scale: 1.05, transition: transition}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
                <g id="Elipse_21" data-name="Elipse 21" fill="none" stroke-width="12">
                    <circle cx="75" cy="75" r="75" stroke="none"/>
                    <circle cx="75" cy="75" r="69" fill="none"/>
                </g>
                <g id="Grupo_27" data-name="Grupo 27" transform="translate(-1404 -531)">
                    <circle id="Elipse_8" className="inner-circles" data-name="Elipse 8" cx="7.5" cy="7.5" r="7.5" transform="translate(1449 579)"/>
                    <circle id="Elipse_15" className="inner-circles" data-name="Elipse 15" cx="7.5" cy="7.5" r="7.5" transform="translate(1494 579)"/>
                </g>
            </svg>

            {
                title && (
                    <b>
                        {title}
                    </b>
                )
            }
        </FaceWrapper>
    )
    
}