import { ReactNode } from 'react';

import Card from './card';

export default function AboutCard({
    name,
    role,
    bio,
    pic,
    links,
}: {
    name: string;
    role: string;
    bio: string;
    pic?: string;
    links?: Array<{ link: string; node: ReactNode }>;
}) {
    return (
        <Card
            titleText={name}
            subtitleText={role}
            descriptionText={bio}
            image={pic || '/img/team/profile-pic-default.jpg'}
            links={links}
        />
    );
}
