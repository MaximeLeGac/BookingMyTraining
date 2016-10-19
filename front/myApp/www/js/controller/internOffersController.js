angular.module('app.controllers')
.controller('InternOffersController', function($scope) {
    // Récupération des offres
    $scope.offers = [
        { 
            id: 1, 
            label: 'Développeur',
            earning: '10K€',
            description: 'description test 1',
            location: 'Nulle part',
            referent: {
                company : {
                    name: 'CGI',
                    logoLink: 'http://3.bp.blogspot.com/-6AOA3ACYmos/UPZGQCqEwYI/AAAAAAAAVnM/91uDFflFQEs/s1600/CGI+logo+2013.png'
                }
            },
            myApply: {
                    state: 1,
                    stateLabel: 'disponible'
            },
            apply: [
                {
                    state: 1,
                    stateLabel: 'disponible'
                }
            ]
        },
        { 
            id: 2, 
            label: 'Lead developer',
            earning: '15K€',
            description: 'description test 2',
            location: 'Nulle part',
            referent: {
                company : {
                    name: 'IBP',
                    logoLink: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAYOAAAAJGZmODE5NzgwLTIxODgtNDMwZi05YmY5LWI2NjU1NzgwNmU3NQ.png'
                }
            },
            myApply: {
                    state: 1,
                    stateLabel: 'refuse'
            },
            apply: [
                {
                    state: 1,
                    stateLabel: 'refuse'
                }
            ]
        },
        { 
            id: 3, 
            label: 'Développeur',
            earning: '8K€',
            description: 'description test 3',
            location: 'Nulle part',
            referent: {
                company : {
                    name: 'CapGemini',
                    logoLink: 'http://www.handi-numerique.com/sites/default/files/styles/medium/public/entreprises/capgemini_0.png?itok=jf_C1jbu'
                }
            },
            myApply: {
                    state: 1,
                    stateLabel: 'postule'
            },
            apply: [
                {
                    state: 1,
                    stateLabel: 'postule'
                }
            ]
        },
        { 
            id: 4, 
            label: 'Testeur',
            earning: '7K€',
            description: 'description test 4',
            location: 'Nulle part',
            referent: {
                company : {
                    name: 'Atos',
                    logoLink: 'https://upload.wikimedia.org/wikipedia/fr/1/16/Logo_Atos_600x424.jpg'
                }
            },
            myApply: {
                    state: 1,
                    stateLabel: 'disponible'
            },
            apply: [
                {
                    state: 1,
                    stateLabel: 'disponible'
                }
            ]
        },
        { 
            id: 5, 
            label: 'Technicien de surface',
            earning: '22K€',
            description: 'description test 5',
            location: 'Nulle part',
            referent: {
                company : {
                    name: 'Google',
                    logoLink: 'https://www.wired.com/wp-content/uploads/2015/09/google-logo-1200x630.jpg'
                }
            },
            myApply: {
                    state: 1,
                    stateLabel: 'valide'
            },
            apply: [
                {
                    state: 1,
                    stateLabel: 'valide'
                }
            ]
        },
        { 
            id: 6, 
            label: 'Team manager',
            earning: '1K€',
            description: 'description test 6',
            location: 'Nulle part',
            referent: {
                company : {
                    name: 'Accenture',
                    logoLink: 'http://logok.org/wp-content/uploads/2014/03/Accenture-logo-1024x768.png'
                }
            },
            myApply: {
                    state: 1,
                    stateLabel: 'postule'
            },
            apply: [
                {
                    state: 1,
                    stateLabel: 'postule'
                }
            ]
        }
    ];
});