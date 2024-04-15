import { Col, Divider, Row } from 'antd'
import React from 'react'
import { DescriptionItemProps, UserType } from '../../interface/dashboard';

const DescriptionItem: React.FC<DescriptionItemProps> = ({ title, content }) => {
    const capitalizedContent = typeof content === 'string' ? content.charAt(0).toUpperCase() + content.slice(1) : content;

    return (
        <div className="site-description-item-profile-wrapper">
            <p className="site-description-item-profile-p-label">{title}:</p>
            {capitalizedContent}
        </div>
    );
};

export const ShowData: React.FC<{ data: UserType }> = ({ data }) => {
    return (
        <>
            <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
                Perfil
            </p>
            <Divider />
            <p className="site-description-item-profile-p">Personal</p>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Nombres" content={data?.name} />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Apellidos" content={data?.surname} />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Ciudad" content={data?.city} />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="País" content={data?.country} />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Cumpleaños" content={data?.date_of_birth ? new Date(data.date_of_birth).toISOString().split('T')[0] : ''} />

                </Col>
                <Col span={12}>
                    <DescriptionItem title="Usuario" content={data?.username} />
                </Col>
            </Row>

            <Divider />
            <p className="site-description-item-profile-p">Contacto</p>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Email" content={data?.email} />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Teléfono" content={data?.phone} />
                </Col>
            </Row>
        </>
    )
}
