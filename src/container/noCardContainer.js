import React from "react";
import {Divider} from "primereact/divider";
import {Button} from "primereact/button";
import {Card} from "primereact/card";

const NoCardContainer = props => {
    const {firebasePush, realTimeRef, navigate} = props;
    const cardImage = type => {
        switch (type) {
            case 'cash':
                return 'https://wise.com/imaginary-v2/money-banks-turkey-lira-money.jpg?width=1200';
            case 'account':
                return 'https://media-cdn.t24.com.tr/media/library/2023/08/1692256878545-asas.jpg';
            case 'credit_card':
                return 'https://image.troyodeme.com/kart-deneme-web1-m7G0Qdr1.png';
            case 'other_debt':
                return 'https://i.dunya.com/storage/files/images/2023/03/04/borc-para-3ZqK_cover.jpg';
            default:
                return 'https://wise.com/imaginary-v2/money-banks-turkey-lira-money.jpg?width=1200';
        }
    }
    const header = type => {
        return (
            <img alt="Card" src={cardImage(type)} height={180}/>
        );
    }

    const commons = {
        amount: 0,
        currency: 'TRY',
    }
    const handleAddScheme = () => {
        firebasePush(realTimeRef, {
                ...commons,
                type: 'cash',
                name: 'Nakit',
            }
        );
        firebasePush(realTimeRef, {
                ...commons,
                type: 'account',
                name: 'Hesap',
            }
        );
        firebasePush(realTimeRef, {
                ...commons,
                type: 'credit_card',
                name: 'Kredi Kartım',
            }
        );
        firebasePush(realTimeRef, {
                ...commons,
                type: 'other_debt',
                name: 'Diğer Borçlarım',
            }
        );
    };
    return (
        <>
            <Divider align="center">
                <span className="p-tag">Henüz varlık veya borç kartları eklemediniz.</span>
            </Divider>
            <p>
                Hesap kartlarınızı veya borç kartlarınızı ekleyerek, borç ve varlıklarınızı takip edebilirsiniz.
                <br/>
                <br/>
                Ya da dilerseniz aşağıdaki şablonu kullanabilirsiniz.
            </p>
            <Divider align="right">
                <Button label="Ben ekleyeceğim" icon="pi pi-plus" className="p-button-outlined" onClick={() => navigate('/add_cards')}></Button>
            </Divider>
            <div style={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                <Card title="Varlık" subTitle="Nakit" header={header('cash')} style={{width: '20%', marginTop: 20}}/>
                <Card title="Varlık" subTitle="Hesap" header={header('account')} style={{width: '20%', marginTop: 20}}/>
                <Card title="Borç" subTitle="Kredi Kartım" header={header('credit_card')}
                      style={{width: '20%', marginTop: 20}}/>
                <Card title="Borç" subTitle="Diğer Borçlarım" header={header('other_debt')}
                      style={{width: '20%', marginTop: 20}}/>
            </div>
            <Divider align="right">
                <Button label="Şablondaki Kartları Ekle" icon="pi pi-thumbs-up" className="p-button-outlined"
                        onClick={handleAddScheme}/>
            </Divider>
        </>
    )
}

export default NoCardContainer;
