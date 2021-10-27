import React from "react";
import PriceCard from "../components/PriceCard";

const plans = [
    {
    name: 'MP3 ∞',
    price: '40',
    currency: '$',
    features: [
        'MP3',
        'Instant Download / Untagged',
        'Sell Unlimited Copies',
        'Unlimited Audio Streams',
        'Unlimited Video Streams',
        '100% Royalty-Free',
    ],
    nonfeatures: [
        'Track listing removed online and no longer sold'
    ]
    },
    {
        name: 'WAV ∞',
        price: '60',
        currency: '$',
        features: [
            'MP3 + WAV',
            'Instant Download / Untagged',
            'Sell Unlimited Copies',
            'Unlimited Audio Streams',
            'Unlimited Video Streams',
            '100% Royalty-Free',
        ],
        nonfeatures: [
            'Track listing removed online and no longer sold'
        ]
    },
    {
        name: 'Stems ∞',
        price: '100',
        currency: '$',
        features: [
            'MP3 + WAV + Flattened Stems',
            'Instant Download / Untagged',
            'Sell Unlimited Copies',
            'Unlimited Audio Streams',
            'Unlimited Video Streams',
            '100% Royalty-Free',
        ],
        nonfeatures: [
            'Track listing removed online and no longer sold'
        ]
    },
    {
        name: 'Exclusive',
        price: 'Varies',
        currency: '',
        features: [
            'MP3 + WAV + Flattened Stems',
            'Instant Download / Untagged',
            'Sell Unlimited Copies',
            'Unlimited Audio Streams',
            'Unlimited Video Streams',
            '100% Royalty-Free',
            'Track listing removed online and no longer sold'
        ]
    },
];

const PriceCards = () => {
    return (
        <div className='bg-gray-200 px-6 py-12'>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 mx-0">
                {plans.map(plan => (
                    <div className="w-full max-w-md mx-auto">
                        <PriceCard { ... plan} key={plan.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PriceCards;