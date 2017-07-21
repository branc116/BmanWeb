$lines = @{};
$files = @{};

Get-ChildItem -File -Recurse   | ForEach-Object -Process { 
    $curFile = ${_}; 
    if ($_.FullName -notlike "*.jpg" -and
        $_.FullName -notlike "*.exe" -and
        $_.FullName -notlike "*.dll" -and
        $_.FullName -notlike "*.png" -and
        $_.FullName -notlike "*.doc*" -and
        $_.FullName -notlike "*bin*" -and
        $_.FullName -notlike "*Content*" -and
        $_.FullName -notlike "*obj*" -and
        $_.FullName -notlike "*packages*" -and
        $_.FullName -notlike "*bower*" -and
        $_.FullName -notlike "*build*" -and
        $_.FullName -notlike "*Scripts\*" -and
        $_.FullName -notlike "*map" -and
        $_.FullName -notlike "*svg" -and
        $_.FullName -notlike "*.git" -and
        $_.FullName -notlike "*node_modules*"
        ){
        if ($lines.ContainsKey( $_.Extension )) {
        }else {
            $lines.Add($_.Extension, @($_.Extension, 0, 0));
        }
        $lines[$_.Extension][1] += (Get-Content $_.FullName).Length;
        $lines[$_.Extension][2] += 1;
    }
};
$lines.Values | Select-Object -Property @{Name = "Extension"; Expression={$_[0]}}, @{Name = "NumberOfLines"; Expression={$_[1]}}, @{Name = "NumberOfFiles"; Expression={$_[2]}} | Sort-Object -Descending -Property NumberOfLines |  echo;