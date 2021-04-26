<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app->get('/parents', function (Request $request, Response $response, $args) {
    require_once('dbconnect.php');

    $query = "SELECT * FROM product WHERE parent_id = 0";
    $result = $mysqli->query($query);
    $mysqli->close();

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    if (isset($data)) {
        header('Content-Type: application/json');
        $response->getBody()->write(json_encode($data));
    }

    return $response;
});

$app->get('/children/{parent_id}', function (Request $request, Response $response, $args) {
    require_once('dbconnect.php');

    $parent_id = $args['parent_id'];
    $query = sprintf("SELECT * FROM product WHERE parent_id=%d", $mysqli->real_escape_string($parent_id));
    $result = $mysqli->query($query);
    $mysqli->close();

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    if (isset($data)) {
        header('Content-Type: application/json');
        $response->getBody()->write(json_encode($data));
    }

    return $response;
});

$app->get('/children_subchildren/{parent_id}', function (Request $request, Response $response, $args) {
    require_once('dbconnect.php');

    $parent_id = $args['parent_id'];
    $query = sprintf(
        "
        SELECT * 
        FROM product 
        WHERE parent_id=%d
        UNION
        SELECT * 
        FROM product
        WHERE parent_id IN 
            (SELECT id FROM product WHERE parent_id=%d);",
        $mysqli->real_escape_string($parent_id),
        $mysqli->real_escape_string($parent_id)
    );
    $result = $mysqli->query($query);
    $mysqli->close();

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    if (isset($data)) {
        header('Content-Type: application/json');
        $response->getBody()->write(json_encode($data));
    }

    return $response;
});