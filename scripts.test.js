/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Testes de HTML', () => {
    let document;

    beforeAll(() => {
        const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        document = new DOMParser().parseFromString(html, 'text/html');
    });
    test('o título da página deve ser "Portal Educa"', () => {
        expect(document.title).toBe('Portal Educa');
    });
    test('deve conter o título "Foque nos Estudos" no main', () => {
        const mainTitle = document.querySelector('main h1');
        expect(mainTitle.textContent).toBe('Foque nos Estudos');
    }); 
    test('deve conter a seção "Nossos Serviços"', () => {
        const servicesHeading = document.querySelector('.heading');
        expect(servicesHeading.textContent).toContain('Nossos Serviços');
    });
    test('deve ter links de navegação', () => {
        const navLinks = document.querySelectorAll('.nav-list li a');
        expect(navLinks.length).toBeGreaterThan(0);
        expect(navLinks[0].textContent).toBe('Home');
    });
    test('deve conter uma imagem', () => {
        const image = document.querySelector('img');
        expect(image.src).toBeTruthy(); // Verifica se a imagem tem um src
    });
    test('deve conter um rodapé', () => {
        const footer = document.querySelector('footer');
        expect(footer).toBeTruthy();
    });

    test('deve conter um h2', () => {
        const h2 = document.querySelector('h2');
        expect(h2).toBeTruthy(); 
    });
    test('deve conter um h1', () => {
        const h1 = document.querySelector('h1');
        expect(h1).toBeTruthy(); 
    });
    test('deve conter um h3', () => {
        const h3 = document.querySelector('h3');
        expect(h3).toBeTruthy(); 
    });
    test('deve conter o título "Conheça nossa equipe"', () => {
        const teamHeading = document.querySelector('.equipe h1');
        expect(teamHeading.textContent).toBe('Conheça nossa equipe');
    });
    test('deve conter links de contato no rodapé', () => {
        const footerLinks = document.querySelectorAll('footer a');
        expect(footerLinks.length).toBeGreaterThan(0);
    });
});

