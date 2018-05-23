<?php

    $menu = [
        ['titulo' => "Home",'link' => "../", 'order' => "1"],
        ['titulo' => "Sobre",'link' => "sobre", 'order' => "2"],
        ['titulo' => "Mapa",'link' => "mapa", 'order' => "4"],
        ['titulo' => "Fale Conosco",'link' => "contato", 'order' => "3"]
    ];

    $dados = [
            ['titulo' => "Titulo",'resumo' => 'Ut enim ad minim veniam, quis nostrud exercitation...','descricao' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ','imagem' => 'https://materializecss.com/images/office.jpg','link' => '#detalhe'],
            ['titulo' => "Titulo da Noticia 002",'resumo' => 'Ut enim ad minim veniam, quis nostrud exercitation...','descricao' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ','imagem' => 'https://materializecss.com/images/sample-1.jpg','link' => '#detalhe'],
            ['titulo' => "Titulo da Noticia 003",'resumo' => 'Ut enim ad minim veniam, quis nostrud exercitation...','descricao' => 'Lorem ipsum dolor sit amet, achou consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ','imagem' => 'https://materializecss.com/images/office.jpg','link' => '#detalhe'],
            ['titulo' => "Titulo da Noticia 004",'resumo' => 'Ut enim ad minim veniam, quis nostrud exercitation...','descricao' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ','imagem' => 'https://materializecss.com/images/sample-1.jpg','link' => '#detalhe'],
            ['titulo' => "Titulo da Noticia 005",'resumo' => 'Ut enim ad minim veniam, quis nostrud exercitation...','descricao' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ','imagem' => 'https://materializecss.com/images/office.jpg','link' => '#detalhe'],
            ['titulo' => "Titulo da Noticia 006",'resumo' => 'Ut enim ad minim veniam, quis nostrud exercitation...','descricao' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ','imagem' => 'https://materializecss.com/images/sample-1.jpg','link' => '#detalhe']
        ];



        if(isset($_GET['menu'])){
            echo json_encode($menu);exit;
        }

        if(isset($_GET['dados'])){
            echo json_encode($dados);exit;
        }
?>