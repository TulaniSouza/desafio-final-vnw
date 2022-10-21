import Transport from '../Assets/transp.png'
import Locomoção from '../Assets/transpModal.jpg'
import Health from '../Assets/saude.png'
import Cuidados from '../Assets/saudeModal.jpg'
import Study from '../Assets/edu.png'
import Educação from '../Assets/eduModal.webp'
import Water from '../Assets/água.png'
import Suja from '../Assets/águaModal.jpg'
import Energy from '../Assets/energia.png'
import Energia from '../Assets/energiaModal.jpg'

// 

const data = [
    {
        id: 1,
        btn: Transport,
        name: 'Transporte',
        alt: 'Meios de Transporte',
        img: Locomoção,
        title: 'Transporte',
        txt: 'Solicitar a prefeitura, ao secretário de de transporte maior contingente de ônibus e suas devidas concorrências de linhas para  que assim diminuam a grande espera em pontos de ônibus e atrasos nos empregos. Tendo assim funcionários mais bem dispostos. E pessoas em geral satisfeitas com os impostos pagos. Criar conscientização através de mídias sociais e propagandas para o cuidado e manutenção dos transportes'
    },
    {
        id: 2,
        btn: Health,
        name: 'Saúde',
        alt: 'Coração',
        img: Cuidados,
        title: 'Saúde',
        txt: 'Solicitar ao Ministro da saúde, Prefeitura e Estado, maior contingente de médicos capacitados para situações diversas. Investimento nas áreas de saúde em geral como fisioterapeutas, profissionais de educação física... para que ao serem valorizados, possam prestar um serviço de qualidade para toda a população.'
    },
    {
        id: 3,
        btn: Study,
        alt: 'Livros',
        name: 'Educação',
        img: Educação,
        title: 'Educação',
        txt: 'Desenvolvimento de projetos para áreas com menos acessibilidade a grandes instituições de ensino em diferentes graus de instruções, de forma gratuita. Conscientização dos benefícios dos estudos desde a base familiar com informações através de televisões e mídias em geral. Cobrança ao Ministro da Educação para que execute os melhores projetos de forma acessível tanto dentro quanto fora das escolas.'
    },
    {
        id: 4,
        btn: Water,
        alt: 'Água',
        name: 'Saneamento',
        img: Suja,
        title: 'Saneamento',
        txt: 'Abaixo assinado, propagandas em todas as mídias sociais e televisivas para conscientização de pessoas de todas as idades e em amplas situações de vida.'
    },
    {
        id: 5,
        btn: Energy,
        alt: 'Energia',
        name: 'Energia',
        img: Energia,
        title: 'Energia Limpa',
        txt: 'solicitação de inclusão desta forma qualidade de energia para todos, para que assim o meio ambiente seja mais valorizado e possa auxiliar também os profissionais de saúde a cuidar da população.'
    },
]

export default data;