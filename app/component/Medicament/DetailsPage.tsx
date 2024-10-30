'use client'
import styled from "styled-components";
const Container = styled.div`
    padding: 20px;
    max-width: 1229px;
    margin: auto;
    background: #EDF1F5;
`
const Header = styled.h2`
   display: flex;
`
const Medic = styled.span`

    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    color: #1D242E;
    flex: none;
    order: 0;
    flex-grow: 0;
`
const Alldetails = styled.span`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: #1D242E;
    flex: none;
    order: 2;
    flex-grow: 0;
`
const SectionTitle = styled.h3`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #1D242E;
    margin-top: 20px;
`
const MedicationTitle = styled.h1`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 24px;
    /* or 75% */
    display: flex;
    align-items: center;

    color: #1D242E;
    margin-top: 10px;
`
const ImageContainer = styled.div`
        width: 274px;
        height: 308px;
        padding-top: 20px;
//     float: left;
//     margin-right: 20px;
// `
const MedicationImage = styled.img`
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`
const InfoTexts = styled.div` 
    
`
const MedicationInfo = styled.div` 
    margin: auto 150px;
    display: flex;
    justify-content: space-between;
`
const InfoText = styled.p`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #1D242E;
    margin: 8px 0;
`;

const DescriptionText = styled.p`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #1D242E;
  margin-top: 10px;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 14px;
  color: #888;
  padding: 20px;
  border-top: 1px solid #ddd;
  margin-top: 20px;
`;
const DetailsPage = () =>{
    return (
        <Container>
            <Header><Medic>Medicaments</Medic> &gt; <Alldetails>Tous les details</Alldetails></Header>
            <MedicationInfo>
                <ImageContainer>
                    <MedicationImage src="medicament.png" alt="Image du medicament" />
                </ImageContainer>
                <InfoTexts>
                    <MedicationTitle>Augmentin 625 Duo comprime</MedicationTitle>

                    <SectionTitle>Composition</SectionTitle>
                    <InfoText>Amoxicillin-500mg + Clavulanic Acid-125mg</InfoText>

                    <SectionTitle>Fabricant/Commercant</SectionTitle>
                    <InfoText>GlaxoSmithKline Pharmaceutical Ltd</InfoText>

                    <SectionTitle>Type de consommation</SectionTitle>
                    <InfoText>Oral</InfoText>

                    <SectionTitle>Date d'expiration</SectionTitle>
                    <InfoText>25 Janvier</InfoText>
                </InfoTexts>
            </MedicationInfo>

                <SectionTitle>Description :</SectionTitle>
                <DescriptionText>
                    Augmentin 625 DuoComprimé est utilisé pour traiter les infections bactériennes du corps qui affectent la peau, les tissus mous, les poumons, les oreilles, les voies urinaires et les sinus nasaux.
                    Il convient de mentionner que les infections virales comme la grippe et le rhume ne sont pas traitées par ce médicament.
                      Augmentin 625 Duo Tablet se compose de deux médicaments : l’amoxicilline et l’acide clavulanique.
                    L'amoxicilline agit en détruisant la couche protéique externe, tuant ainsi les bactéries (action bactéricide).
                    L'acide clavulanique inhibe l'enzyme bêta-lactamase, qui empêche les bactéries de détruire l'efficacité de l'amoxicilline.
                    En conséquence, l’action de l’acide clavulanique permet à l’amoxicilline de mieux agir et de tuer les bactéries.
                    Augmentin 625 Duo Tablet n'agit pas contre les infections causées par des virus, notamment le rhume et la grippe.
                      La dose d'Augmentin 625 Duo Tablet peut varier en fonction de votre état et de la gravité de l'infection.
                    En outre, il est recommandé de terminer le traitement même si vous vous sentez mieux, car il s'agit d'un antibiotique,
                    et le laisser entre les deux peut entraîner une infection même grave qui, en fait, cessera également de répondre à l'antibiotique
                    (résistance aux antibiotiques). . Les effets secondaires courants du comprimé Augmentin 625 Duo comprennent des vomissements, des nausées et de la diarrhée. Il se peut que tout le monde ne ressente pas les effets secondaires ci-dessus.
                    En cas d'inconfort, parlez-en à un médecin.  Avant de commencer Augmentin 625 Duo Tablet, veuillez informer votre médecin si vous avez une allergie (à tout antibiotique) ou des problèmes rénaux ou hépatiques. Ne prenez pas Augmentin 625 Duo Tablet seul en automédication, car cela pourrait entraîner une résistance aux antibiotiques dans laquelle les antibiotiques n'agissent pas contre des infections bactériennes spécifiques. Augmentin 625 Duo Tablet est sans danger pour les enfants s’il est prescrit par un médecin ; la dose et la durée peuvent varier en fonction du poids de l’enfant et de la gravité de l’infection.
                    Informez votre médecin de tous les médicaments que vous prenez et de votre état de santé afin d'exclure tout effet secondaire désagréable.
                </DescriptionText>

                <SectionTitle>Dosage et posologie</SectionTitle>
                <DescriptionText>
                    Posologie usuelle
                    Prendre Augmentin de préférence en début de repas avec un demi-verre d'eau au moins. Cela permet d'assurer une efficacité et une tolérance optimales. Sauf prescription médicale contraire, la posologie suivante est applicable:
                    Adulte
                    Infections légères, modérées à sévères:
                    625 mg d'Augmentin (500/125) 3 fois par jour ou, dans certains cas,
                    1 g d'Augmentintin (875/125) 2 fois par jour.
                    Le sillon de sécabilité des comprimés filmés à 1 g est uniquement destiné à faciliter la prise du comprimé. Les comprimés filmés ne sont pas destinés à réduire la dose de moitié. Les deux moitiés doivent être prises simultanément.
                    Une fois commencé, tout traitement par antibiotiques doit être poursuivi pendant la période prescrite par le médecin.
                    Les symptômes de la maladie disparaissent fréquemment avant la guérison complète de l'infection. Pour cette raison, il ne faut pas arrêter le traitement avant terme, même si vous vous sentez mieux.
                    Ne changez pas de votre propre chef le dosage prescrit. Adressez-vous à votre médecin ou à votre pharmacien si vous estimez que l'efficacité du médicament est trop faible ou au contraire trop forte.
                </DescriptionText>

                <SectionTitle>Ingredients actifs</SectionTitle>
                <DescriptionText>
                    Ingrédients (INCI) : Eau (Aqua), Carbonate de calcium, Glycérine, Silicate d'aluminium et de magnésium, Extrait de Calendula officinalis, Alcool, Extrait de résine de Commiphora myrrha, Gomme de xanthane, Glycyrrhizate d'ammonium, arôme (arôme)*, limonène*.  *À partir d'huiles essentielles naturelles. Des ingrédients bio.
                </DescriptionText>

                <SectionTitle>Effets secondaire</SectionTitle>
                <DescriptionText>
                    Vomissement <br/>
                    Diarrhée <br/>
                    Indigestion <br/>
                </DescriptionText>

                <SectionTitle>Forme pharmaceutique</SectionTitle>
                <InfoText>Comprime</InfoText>


            <Footer>
                Propulsé par Fadj-Ma © 2024 • Version 1.0
            </Footer>
        </Container>
    )
}
export default DetailsPage;