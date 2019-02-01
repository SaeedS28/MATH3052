messageTriangle = 'Please enter the cartesian coordinates of the vertices of the triangle in the form: ';
formatTriangle = '[X1 Y1 X2 Y2 X3 Y3] \nDO NOT FORGET TO START AND END WITH THE SQUARE BRACKETS!\n>>  ';

triangleCoor = input(strcat(messageTriangle,formatTriangle));
disp(triangleCoor);

if size(triangleCoor,2) ~= 6
    error("You didn't enter the 6 parameters.  Try Again");
end